from flask import Flask, render_template, request, redirect, url_for
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import praw

app = Flask(__name__)

reddit = praw.Reddit(
    client_id="446egcbq34XRYrgst8DDJg",
    client_secret="WwOaASS5_DIL8UmwZw12Sis9U3NvOg",
    user_agent="redditdev sentiment analysis",
    )

@app.route('/sentiment', methods=['GET', 'POST'])
def get_sentiment_analysis():


    if request.method == 'POST':
        topic = request.json.get('topic', '')
        subreddit_name = request.json.get('subreddit', '')
        subreddit = reddit.subreddit(subreddit_name) if subreddit_name else None
        if topic and subreddit:
          sinn_fein_posts = subreddit.search(topic, limit=1)


        for post in sinn_fein_posts:
                print(post.title)
                print("Number of Comments:", len(post.comments))
                print(post.url)
                print("this is the post")

        for comment in post.comments.list():
                post.comments.replace_more(limit=0)
                sfarray = [comment.body for comment in post.comments.list()]

        for comment in post.comments[:10]:
                post.comment_sort = "top"
                post.comments[0]
                print("TOP COMMENT: ", comment.body)

        analyzer = SentimentIntensityAnalyzer()
        vscomment = analyzer.polarity_scores(comment.body)

        print(sfarray)

        analyzer = SentimentIntensityAnalyzer()
        vs = analyzer.polarity_scores(' '.join(sfarray))

        print("Top comment Sentiment ", vscomment['compound'])
        print("Sentiment Score ", vs['compound'])


        if vs['compound'] >= 0.05:
                sentiment = " largely Positive"
        elif vs['compound'] <= -0.05:
                sentiment = " largely Negative"
        else:
                sentiment = " Neutral"
        print("Sentiment is", sentiment)
        return {"compound": vs['compound'], "sentiment": sentiment,  "topic": topic}

    # Return a response for 'GET' requests or other cases
    return {"message": "Invalid request"}

if __name__ == '__main__':
    app.run(debug=True)
