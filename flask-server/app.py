from flask import Flask, render_template, request, redirect, url_for
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from nltk.corpus import stopwords
from collections import defaultdict
from collections import Counter
import time
from nltk.tokenize import word_tokenize
import nltk
nltk.download('stopwords')
import praw
import nltk
nltk.download('punkt')
import datetime



app = Flask(__name__)

reddit = praw.Reddit(
        client_id="446egcbq34XRYrgst8DDJg",
        client_secret="WwOaASS5_DIL8UmwZw12Sis9U3NvOg",
        user_agent="redditdev sentiment analysis",
        )

def load_stopwords():
    stopwords_file = open("gist_stopwords.txt", "r")
    try:
        content = stopwords_file.read()
        stopwords_list = content.split(",")
    finally:
        stopwords_file.close()
    return set(stopwords_list)

stop_words = load_stopwords()

print(stop_words)

@app.route('/sentiment', methods=['POST'])
def get_sentiment_analysis():
        start_time = time.time()
        topic = request.json.get('topic', '')
        subreddit_name = request.json.get('subreddit', '')
        subreddit = reddit.subreddit(subreddit_name) if subreddit_name else None
        if topic and subreddit:
                        searched_posts = subreddit.search(topic, sort='hot', limit=5)
                        post_titles = [post.title for post in searched_posts]

                        print("Post titles: ", post_titles)

                        end_time = time.time()  # Record the end time
                        execution_time = end_time - start_time
                        print("Execution time:", execution_time, "seconds")

                        # comments_datetime = []
                        # for comment in post.comments.list():
                        #         post.comments.replace_more(limit=3)
                        #         if isinstance(comment, praw.models.Comment):
                        #                 comments_datetime.append(datetime.datetime.fromtimestamp(comment.created_utc))
                        #                 print("Comment datetime:", datetime.datetime.fromtimestamp(comment.created_utc))
                        #         commentsarray = [comment.body for comment in post.comments.list()]
                        #         filtered_commentsarray = [' '.join([word for word in word_tokenize(comment) if word.lower() not in stop_words]) for comment in commentsarray]

                        # top_comments = []
                        # top_comments_datetime = []
                        # top_comments_score = []
                        # for comment in post.comments[:3]:
                        #    if isinstance(comment, praw.models.Comment):
                        #     top_comments.append(comment.body)
                        #     top_comments_datetime.append(datetime.datetime.fromtimestamp(comment.created_utc))
                        #     top_comments_score.append(comment.score)
                        #     print("3 TOP COMMENTS: ", comment.body)
                        #     print("3 Top comments score: ", comment.score)


                        # analyzer = SentimentIntensityAnalyzer()
                        # vscomment = analyzer.polarity_scores(comment.body)



                        # print(commentsarray)

                        # analyzer = SentimentIntensityAnalyzer()
                        # vs = analyzer.polarity_scores(' '.join(commentsarray))

                        # print("top 3 comments", top_comments)
                        # for i, comment_body in enumerate(top_comments[:3], start=1):
                        #         print(f"Comment {i}: {comment_body}")
                        #         print(f"Comment {i} datetime: {top_comments_datetime[i-1]}")

                        # print("Top comment Sentiment ", vscomment['compound'])
                        # print("Sentiment Score ", vs['compound'])




                        # if vs['compound'] >= 0.05:
                        #         sentiment = " largely Positive"
                        # elif vs['compound'] <= -0.05:
                        #         sentiment = " largely Negative"
                        # else:
                        #         sentiment = " Neutral"
                        # print("Sentiment is", sentiment)

        return {
                                # "compound": vs['compound'],
                                # "sentiment": sentiment,
                                # "topic": topic,
                                # "positive": vs['pos'],
                                # "neutral": vs['neu'],
                                # "negative": vs['neg'],
                                "subreddit": subreddit_name,
                                # "post": post.title,
                                # "comments": len(post.comments),
                                # "url": post.url,
                                # "top_comment": comment.body,
                                # "top_comment_sentiment": vscomment,
                                # "top3comments": top_comments,
                                # "top3commentsdatetime": top_comments_datetime,
                                # "commentsarray": commentsarray,
                                # "post_image_url": post_image_url,
                                # "commentsdatetime": comments_datetime,
                                # "topcommentsscore": top_comments_score,
                                # "filtered_commentsarray": filtered_commentsarray,
                                "post_titles": post_titles
                        }

        # Return a response for 'GET' requests or other cases
        return {"message": "Invalid request"}


@app.route('/analyze_sentiment', methods=['POST'])
def perform_sentiment_analysis():
          start_time = time.time()
          post_title = request.json.get('post_title', '')
          subreddit_name = request.json.get('subreddit', '')
          subreddit = reddit.subreddit(subreddit_name)
          if post_title and subreddit:
                                       searched_posts = list(subreddit.search(post_title, sort='relevant', limit=1))
                                       if searched_posts:
                                          post = searched_posts[0]
                                          post_titles = [post.title]

                                          comments_by_date = defaultdict(list)


                                          comments = []
                                          post.comments.replace_more(limit=2)
                                          comments.extend([comment.body for comment in post.comments.list() if isinstance(comment, praw.models.Comment)])
                                          number_of_comments = len(comments)
                                          comments_datetime = []
                                          for comment in post.comments.list():
                                                  post.comments.replace_more(limit=3)
                                                  if isinstance(comment, praw.models.Comment):
                                                          comments_datetime.append(datetime.datetime.fromtimestamp(comment.created_utc))
                                                          comments_by_date[datetime.datetime.fromtimestamp(comment.created_utc).date()].append(comment.body)
                                                          print("Comment datetime:", datetime.datetime.fromtimestamp(comment.created_utc))


                                        #   analysing sentiment of comments by date
                                          sentiment_by_date = defaultdict(list)


                                          analyzer = SentimentIntensityAnalyzer()
                                          for date, comments in comments_by_date.items():
                                                  comments_text = ' '.join(comments)
                                                  sentiment_scores = analyzer.polarity_scores(comments_text)
                                                  sentiment_by_date[str(date)]= sentiment_scores


                                          for date, sentiment in sentiment_by_date.items():
                                            print(f"Sentiment for {date}: {sentiment}")


                                          commentsarray = [comment.body for comment in post.comments.list()]
                                          filtered_commentsarray = [' '.join([word for word in word_tokenize(comment) if word.lower() not in stop_words]) for comment in commentsarray]
                                          number_of_comments = len(commentsarray)
                                          analyzer = SentimentIntensityAnalyzer()
                                          vscomment = analyzer.polarity_scores(comment.body)
                                          print("Comments array", commentsarray)
                                          print("numcomm",  number_of_comments)


                                        #   comments_by_day = defaultdict(list)
                                        #   post.comments.replace_more(limit=3)
                                        #   for comment in post.comments.list():
                                        #           post.comments.replace_more(limit=3)
                                        #           if isinstance(comment, praw.models.Comment):
                                        #                   comments_by_day[datetime.datetime.fromtimestamp(comment.created_utc).date()].append(comment.body)
                                        #                   print("Comment datetime:", datetime.datetime.fromtimestamp(comment.created_utc))

                                        #   sentiment_by_day = {}
                                        #   analyzer = SentimentIntensityAnalyzer()
                                        #   for date, comments in comments_by_day.items():
                                        #           comments_text = ' '.join(comments)
                                        #           sentiment_scores = analyzer.polarity_scores(comments_text)
                                        #           sentiment_by_day[date] = sentiment_scores

                                        #   print(sentiment_by_day)






                                          analyzer = SentimentIntensityAnalyzer()
                                          vs = analyzer.polarity_scores(' '.join(commentsarray))
                                          if vs['compound'] >= 0.05:
                                                  sentiment = " largely Positive"
                                          elif vs['compound'] <= -0.05:
                                                  sentiment = " largely Negative"
                                          else:
                                                  sentiment = " Neutral"
                                          print("Sentiment is", sentiment)

                                          top_comments = []
                                          top_comments_datetime = []
                                          top_comments_score = []
                                          top_comments_sentiment = []
                                          for comment in post.comments[:3]:
                                                if isinstance(comment, praw.models.Comment):
                                                        top_comments.append(comment.body)
                                                        top_comments_datetime.append(datetime.datetime.fromtimestamp(comment.created_utc))
                                                        top_comments_score.append(comment.score)
                                                        print("3 TOP COMMENTS: ", comment.body)
                                                        print("3 Top comments score: ", comment.score)

                                                        sentiment_scores = analyzer.polarity_scores(comment.body)
                                                        sentiment_score = sentiment_scores['compound']
                                                        top_comments_sentiment.append(sentiment_score)


                                                        print("Top 3 comments sentiment scores: ", top_comments_sentiment)

                                        #   top_comments_sentiment = []

                                        #   for comment in post.comments[:3]:
                                        #         if isinstance(comment, praw.models.Comment):
                                        #                 vs = analyzer.polarity_scores(comment.body)
                                        #                 top_comments_sentiment.append(vs)

                                        #   for i, sentiment in enumerate(top_comments_sentiment, start=1):
                                        #         print(f"Sentiment for Top Comment {i}: {sentiment}")

                                          print(searched_posts)
                                          print(comments)
                                          end_time = time.time()  # Record the end time
                                          execution_time = end_time - start_time
                                          print("Execution time:", execution_time, "seconds")


          return {
            "compound": vs['compound'],
            "positive": vs['pos'],
            "neutral": vs['neu'],
            "negative": vs['neg'],
            "commentsarray": comments,
            "top3comments": top_comments,
           "topcommentsscore": top_comments_score,
           "top3commentsdatetime": top_comments_datetime,
           "commentsdatetime": comments_datetime,
           "post": post_title,
           "url": post.url,
           "sentiment": sentiment,
           "comments": len(post.comments),
           "filtered_commentsarray": filtered_commentsarray,
           "number_of_comments": number_of_comments,
           "top3comments_sentiment": top_comments_sentiment,


           "sentiment_by_date": sentiment_by_date,

          }


if __name__ == '__main__':
        app.run(debug=True)
