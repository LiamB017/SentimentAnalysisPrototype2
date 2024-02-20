from flask import Flask, render_template, request, redirect, url_for
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import praw

import datetime

app = Flask(__name__)

reddit = praw.Reddit(
        client_id="446egcbq34XRYrgst8DDJg",
        client_secret="WwOaASS5_DIL8UmwZw12Sis9U3NvOg",
        user_agent="redditdev sentiment analysis",
        )

@app.route('/sentiment', methods=['POST'])
def get_sentiment_analysis():

        if request.method == 'POST':
                topic = request.json.get('topic', '')
                subreddit_name = request.json.get('subreddit', '')
                subreddit = reddit.subreddit(subreddit_name) if subreddit_name else None
                if topic and subreddit:
                        searched_posts = subreddit.search(topic, sort='relevant', limit=1)

                for post in searched_posts:
                        print(post.title)
                        print("Number of Comments:", len(post.comments))
                        print(post.url)
                        print("this is the post")
                        post_image_url = post.url

                        comments_datetime = []
                        for comment in post.comments.list():
                                post.comments.replace_more(limit=3)
                                if isinstance(comment, praw.models.Comment):
                                        comments_datetime.append(datetime.datetime.fromtimestamp(comment.created_utc))
                                        print("Comment datetime:", datetime.datetime.fromtimestamp(comment.created_utc))
                                commentsarray = [comment.body for comment in post.comments.list()]

                        top_comments = []
                        top_comments_datetime = []
                        for comment in post.comments[:3]:
                           if isinstance(comment, praw.models.Comment):
                            top_comments.append(comment.body)
                            top_comments_datetime.append(datetime.datetime.fromtimestamp(comment.created_utc))
                            print("3 TOP COMMENTS: ", comment.body)

                        analyzer = SentimentIntensityAnalyzer()
                        vscomment = analyzer.polarity_scores(comment.body)

                        print(commentsarray)

                        analyzer = SentimentIntensityAnalyzer()
                        vs = analyzer.polarity_scores(' '.join(commentsarray))

                        print("top 3 comments", top_comments)
                        for i, comment_body in enumerate(top_comments[:3], start=1):
                                print(f"Comment {i}: {comment_body}")
                                print(f"Comment {i} datetime: {top_comments_datetime[i-1]}")

                        print("Top comment Sentiment ", vscomment['compound'])
                        print("Sentiment Score ", vs['compound'])


                        if vs['compound'] >= 0.05:
                                sentiment = " largely Positive"
                        elif vs['compound'] <= -0.05:
                                sentiment = " largely Negative"
                        else:
                                sentiment = " Neutral"
                        print("Sentiment is", sentiment)

                        return {"compound": vs['compound'], "sentiment": sentiment,  "topic": topic, "positive": vs['pos'],"neutral": vs['neu'], "negative":vs['neg'], "subreddit": subreddit_name, "post": post.title, "comments": len(post.comments), "url": post.url, "top_comment": comment.body,
                        "top_comment_sentiment": vscomment,"top3comments": top_comments, "top3commentsdatetime": top_comments_datetime,"commentsarray": commentsarray, "post_image_url": post_image_url, "commentsdatetime": comments_datetime}

        # Return a response for 'GET' requests or other cases
        return {"message": "Invalid request"}

if __name__ == '__main__':
        app.run(debug=True)
