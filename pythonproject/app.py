# # # # from flask import Flask, request, jsonify
# # # # from flask_cors import CORS
# # # # from textblob import TextBlob
# # # # import sqlite3
 
# # # # app = Flask(__name__)
# # # # CORS(app)
 
# # # # def init_db():
# # # #     conn = sqlite3.connect("feedback.db")
# # # #     c = conn.cursor()
# # # #     c.execute("CREATE TABLE IF NOT EXISTS positive_feedback (id INTEGER PRIMARY KEY, content TEXT)")
# # # #     c.execute("CREATE TABLE IF NOT EXISTS negative_feedback (id INTEGER PRIMARY KEY, content TEXT)")
# # # #     c.execute("CREATE TABLE IF NOT EXISTS bookings (id INTEGER PRIMARY KEY, name TEXT, email TEXT, flightNumber TEXT, date TEXT, destination TEXT)")
# # # #     conn.commit()
# # # #     conn.close()
 
# # # # @app.route("/flight-booking", methods=["POST"])
# # # # def book_flight():
# # # #     data = request.json
# # # #     conn = sqlite3.connect("feedback.db")
# # # #     c = conn.cursor()
# # # #     c.execute("INSERT INTO bookings (name, email, flightNumber, date, destination) VALUES (?, ?, ?, ?, ?)",
# # # #               (data["name"], data["email"], data["flightNumber"], data["date"], data["destination"]))
# # # #     conn.commit()
# # # #     conn.close()
# # # #     return jsonify({"status": "success"})
 
# # # # @app.route("/feedback", methods=["POST"])
# # # # def save_feedback():
# # # #     content = request.json.get("feedback", "")
# # # #     sentiment = TextBlob(content).sentiment.polarity
# # # #     conn = sqlite3.connect("feedback.db")
# # # #     c = conn.cursor()
# # # #     if sentiment >= 0:
# # # #         c.execute("INSERT INTO positive_feedback (content) VALUES (?)", (content,))
# # # #     else:
# # # #         c.execute("INSERT INTO negative_feedback (content) VALUES (?)", (content,))
# # # #     conn.commit()
# # # #     conn.close()
# # # #     return jsonify({"sentiment": "positive" if sentiment >= 0 else "negative"})
 
# # # # @app.route("/feedback/positive")
# # # # def get_positive():
# # # #     conn = sqlite3.connect("feedback.db")
# # # #     c = conn.cursor()
# # # #     c.execute("SELECT content FROM positive_feedback")
# # # #     rows = [{"content": row[0]} for row in c.fetchall()]
# # # #     conn.close()
# # # #     return jsonify(rows)
 
# # # # @app.route("/feedback/negative")
# # # # def get_negative():
# # # #     conn = sqlite3.connect("feedback.db")
# # # #     c = conn.cursor()
# # # #     c.execute("SELECT content FROM negative_feedback")
# # # #     rows = [{"content": row[0]} for row in c.fetchall()]
# # # #     conn.close()
# # # #     return jsonify(rows)
 
# # # # if __name__ == "__main__":
# # # #     init_db()
# # # # app.run(debug=True)

# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # import sqlite3
 
# # app = Flask(__name__)
# # CORS(app)  # Allow cross-origin requests
 
# # # Simple sentiment check function
# # def analyze_sentiment(text):
# #     positive_keywords = ["good", "excellent", "great", "on time", "smooth", "nice"]
# #     negative_keywords = ["bad", "delay", "late", "worst", "cancelled", "poor"]
# #     text_lower = text.lower()
 
# #     for word in positive_keywords:
# #         if word in text_lower:
# #             return "positive"
 
# #     for word in negative_keywords:
# #         if word in text_lower:
# #             return "negative"
 
# #     return "neutral"
 
# # @app.route("/feedback", methods=["POST"])
# # def submit_feedback():
# #     # Get feedback data from the request
# #     data = request.json
# #     feedback = data.get("feedback", "")
# #     rating = data.get("rating")
# #     category = data.get("category")
# #     flight_number = data.get("flightNumber")
# #     email = data.get("email")
 
# #     # Analyze sentiment
# #     sentiment = analyze_sentiment(feedback)
 
# #     # Determine which table to insert the feedback into
# #     if sentiment == "positive":
# #         table = "positive_feedbacks"
# #     elif sentiment == "negative":
# #         table = "negative_feedbacks"
# #     else:
# #         return jsonify({"message": "Feedback sentiment unclear. Please be more specific."}), 400
 
# #     try:
# #         # Connect to SQLite database
# #         with sqlite3.connect("feedback.db") as conn:
# #             cursor = conn.cursor()
 
# #             # Ensure the table exists
# #             cursor.execute(f'''
# #                 CREATE TABLE IF NOT EXISTS {table} (
# #                     id INTEGER PRIMARY KEY AUTOINCREMENT,
# #                     feedback TEXT,
# #                     rating INTEGER,
# #                     category TEXT,
# #                     flightNumber TEXT,
# #                     email TEXT
# #                 )
# #             ''')
 
# #             # Insert feedback into the appropriate table
# #             cursor.execute(f'''
# #                 INSERT INTO {table} (feedback, rating, category, flightNumber, email)
# #                 VALUES (?, ?, ?, ?, ?)
# #             ''', (feedback, rating, category, flight_number, email))
 
# #             # Commit changes and close the connection
# #             conn.commit()
 
# #         # Return success response
# #         return jsonify({"message": "Feedback submitted successfully!"})
 
# #     except sqlite3.OperationalError as e:
# #         # Handle database connection errors
# #         return jsonify({"message": f"Database error: {str(e)}"}), 500
# #     except Exception as e:
# #         # Handle any other errors
# #         return jsonify({"message": f"An error occurred: {str(e)}"}), 500
 
# # if __name__ == "__main__":
# #     app.run(debug=True)


# # # from flask import Flask, request, jsonify
# # # from flask_cors import CORS
# # # import sqlite3
 
# # # app = Flask(__name__)
# # # CORS(app)  # Allow cross-origin requests
 
# # # # Simple sentiment check function
# # # def analyze_sentiment(text):
# # #     positive_keywords = ["good", "excellent", "great", "on time", "smooth", "nice"]
# # #     negative_keywords = ["bad", "delay", "late", "worst", "cancelled", "poor"]
# # #     text_lower = text.lower()
 
# # #     for word in positive_keywords:
# # #         if word in text_lower:
# # #             return "positive"
 
# # #     for word in negative_keywords:
# # #         if word in text_lower:
# # #             return "negative"
 
# # #     return "neutral"
 
# # # @app.route("/feedback", methods=["POST"])
# # # def submit_feedback():
# # #     # Get feedback data from the request
# # #     data = request.json
# # #     feedback = data.get("feedback", "")
# # #     rating = data.get("rating")
# # #     category = data.get("category")
# # #     flight_number = data.get("flightNumber")
# # #     email = data.get("email")
 
# # #     # Analyze sentiment
# # #     sentiment = analyze_sentiment(feedback)
 
# # #     # Determine which table to insert the feedback into
# # #     if sentiment == "positive":
# # #         table = "positive_feedbacks"
# # #     elif sentiment == "negative":
# # #         table = "negative_feedbacks"
# # #     else:
# # #         return jsonify({"message": "Feedback sentiment unclear. Please be more specific."}), 400
 
# # #     try:
# # #         # Connect to SQLite database
# # #         with sqlite3.connect("feedback.db") as conn:
# # #             cursor = conn.cursor()
 
# # #             # Ensure the table exists
# # #             cursor.execute(f'''
# # #                 CREATE TABLE IF NOT EXISTS {table} (
# # #                     id INTEGER PRIMARY KEY AUTOINCREMENT,
# # #                     feedback TEXT,
# # #                     rating INTEGER,
# # #                     category TEXT,
# # #                     flightNumber TEXT,
# # #                     email TEXT
# # #                 )
# # #             ''')
 
# # #             # Insert feedback into the appropriate table
# # #             cursor.execute(f'''
# # #                 INSERT INTO {table} (feedback, rating, category, flightNumber, email)
# # #                 VALUES (?, ?, ?, ?, ?)
# # #             ''', (feedback, rating, category, flight_number, email))
 
# # #             # Commit changes and close the connection
# # #             conn.commit()
 
# # #         # Return success response
# # #         return jsonify({"message": "Feedback submitted successfully!"})
 
# # #     except sqlite3.OperationalError as e:
# # #         # Handle database connection errors
# # #         return jsonify({"message": f"Database error: {str(e)}"}), 500
# # #     except Exception as e:
# # #         # Handle any other errors
# # #         return jsonify({"message": f"An error occurred: {str(e)}"}), 500
 
# # # @app.route("/feedback/positive", methods=["GET"])
# # # def get_positive_feedback():
# # #     try:
# # #         with sqlite3.connect("feedback.db") as conn:
# # #             cursor = conn.cursor()
# # #             cursor.execute("SELECT * FROM positive_feedbacks")
# # #             positive_feedback = cursor.fetchall()
 
# # #         return jsonify(positive_feedback)
    
# # #     except sqlite3.OperationalError as e:
# # #         return jsonify({"message": f"Database error: {str(e)}"}), 500
# # #     except Exception as e:
# # #         return jsonify({"message": f"An error occurred: {str(e)}"}), 500
 
 
# # # @app.route("/feedback/negative", methods=["GET"])
# # # def get_negative_feedback():
# # #     try:
# # #         with sqlite3.connect("feedback.db") as conn:
# # #             cursor = conn.cursor()
# # #             cursor.execute("SELECT * FROM negative_feedbacks")
# # #             negative_feedback = cursor.fetchall()
 
# # #         return jsonify(negative_feedback)
    
# # #     except sqlite3.OperationalError as e:
# # #         return jsonify({"message": f"Database error: {str(e)}"}), 500
# # #     except Exception as e:
# # #         return jsonify({"message": f"An error occurred: {str(e)}"}), 500
 
# # # if __name__ == "__main__":
# # #     app.run(debug=True)



# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import sqlite3
 
# app = Flask(__name__)
# CORS(app)  # Allow cross-origin requests
 
# # Simple sentiment check function
# def analyze_sentiment(text):
#     positive_keywords = ["good", "excellent", "great", "on time", "smooth", "nice"]
#     negative_keywords = ["bad", "delay", "late", "worst", "cancelled", "poor"]
#     text_lower = text.lower()
#     for word in positive_keywords:
#         if word in text_lower:
#             return "positive"
#     for word in negative_keywords:
#         if word in text_lower:
#             return "negative"
#     return "neutral"
 
# @app.route("/feedback", methods=["POST"])
# def submit_feedback():
#     data = request.json
#     feedback = data.get("feedback", "")
#     rating = data.get("rating")
#     category = data.get("category")
#     flight_number = data.get("flightNumber")
#     email = data.get("email")
 
#     sentiment = analyze_sentiment(feedback)
#     if sentiment == "positive":
#         table = "positive_feedbacks"
#     elif sentiment == "negative":
#         table = "negative_feedbacks"
#     else:
#         return jsonify({"message": "Feedback sentiment unclear. Please be more specific."}), 400
 
#     try:
#         with sqlite3.connect("feedback.db") as conn:
#             cursor = conn.cursor()
#             cursor.execute(f'''
#                 CREATE TABLE IF NOT EXISTS {table} (
#                     id INTEGER PRIMARY KEY AUTOINCREMENT,
#                     feedback TEXT,
#                     rating INTEGER,
#                     category TEXT,
#                     flightNumber TEXT,
#                     email TEXT
#                 )
#             ''')
#             cursor.execute(f'''
#                 INSERT INTO {table} (feedback, rating, category, flightNumber, email)
#                 VALUES (?, ?, ?, ?, ?)
#             ''', (feedback, rating, category, flight_number, email))
#             conn.commit()
#         return jsonify({"message": "Feedback submitted successfully!", "sentiment": sentiment})
#     except sqlite3.OperationalError as e:
#         return jsonify({"message": f"Database error: {str(e)}"}), 500
#     except Exception as e:
#         return jsonify({"message": f"An error occurred: {str(e)}"}), 500
 
# @app.route("/feedback/positive", methods=["GET"])
# def get_positive_feedbacks():
#     try:
#         with sqlite3.connect("feedback.db") as conn:
#             cursor = conn.cursor()
#             cursor.execute("SELECT * FROM positive_feedbacks")
#             rows = cursor.fetchall()
#         return jsonify(rows)
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
 
# @app.route("/feedback/negative", methods=["GET"])
# def get_negative_feedbacks():
#     try:
#         with sqlite3.connect("feedback.db") as conn:
#             cursor = conn.cursor()
#             cursor.execute("SELECT * FROM negative_feedbacks")
#             rows = cursor.fetchall()
#         return jsonify(rows)
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
 
# if __name__ == "__main__":
#     app.run(debug=True)




# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import sqlite3
# import pandas as pd
 
# app = Flask(__name__)
# CORS(app)
 
# def analyze_sentiment(text):
#     positive_keywords = ["good", "excellent", "great", "on time", "smooth", "nice"]
#     negative_keywords = ["bad", "delay", "late", "worst", "cancelled", "poor"]
#     text_lower = text.lower()
#     for word in positive_keywords:
#         if word in text_lower:
#             return "positive"
#     for word in negative_keywords:
#         if word in text_lower:
#             return "negative"
#     return "neutral"
 
# @app.route("/feedback", methods=["POST"])
# def submit_feedback():
#     data = request.json
#     feedback = data.get("feedback", "")
#     rating = data.get("rating")
#     category = data.get("category")
#     flight_number = data.get("flightNumber")
#     email = data.get("email")
 
#     sentiment = analyze_sentiment(feedback)
#     if sentiment == "positive":
#         table = "positive_feedbacks"
#     elif sentiment == "negative":
#         table = "negative_feedbacks"
#     else:
#         return jsonify({"message": "Feedback sentiment unclear. Please be more specific."}), 400
 
#     try:
#         with sqlite3.connect("feedback.db") as conn:
#             cursor = conn.cursor()
#             cursor.execute(f'''
#                 CREATE TABLE IF NOT EXISTS {table} (
#                     id INTEGER PRIMARY KEY AUTOINCREMENT,
#                     feedback TEXT,
#                     rating INTEGER,
#                     category TEXT,
#                     flightNumber TEXT,
#                     email TEXT
#                 )
#             ''')
#             cursor.execute(f'''
#                 INSERT INTO {table} (feedback, rating, category, flightNumber, email)
#                 VALUES (?, ?, ?, ?, ?)
#             ''', (feedback, rating, category, flight_number, email))
#             conn.commit()
#         return jsonify({"message": "Feedback submitted successfully!", "sentiment": sentiment})
#     except Exception as e:
#         return jsonify({"message": f"An error occurred: {str(e)}"}), 500
 
# @app.route("/feedback/positive", methods=["GET"])
# def get_positive_feedbacks():
#     try:
#         with sqlite3.connect("feedback.db") as conn:
#             df = pd.read_sql_query("SELECT * FROM positive_feedbacks", conn)
#         return jsonify(df.to_dict(orient="records"))
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
 
# @app.route("/feedback/negative", methods=["GET"])
# def get_negative_feedbacks():
#     try:
#         with sqlite3.connect("feedback.db") as conn:
#             df = pd.read_sql_query("SELECT * FROM negative_feedbacks", conn)
#         return jsonify(df.to_dict(orient="records"))
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
 
# if __name__ == "__main__":
#     app.run(debug=True)




from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint
import sqlite3
import pandas as pd

app = Flask(__name__)
CORS(app)

### Swagger specific ###
SWAGGER_URL = '/swagger'  # URL for exposing Swagger UI (without trailing '/')
API_URL = '/static/swagger.yaml'  # Our API url (could also be a remote URL)
# Call factory function to create our blueprint
swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,  # Swagger UI static files will be mapped to '{SWAGGER_URL}/dist/'
    API_URL,
    config={  # Swagger UI config overrides
        'app_name': "Feedback API"
    }
)
app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

# Simple sentiment check function
def analyze_sentiment(text):
    positive_keywords = ["good", "excellent", "great", "on time", "smooth", "nice"]
    negative_keywords = ["bad", "delay", "late", "worst", "cancelled", "poor"]
    text_lower = text.lower()
    for word in positive_keywords:
        if word in text_lower:
            return "positive"
    for word in negative_keywords:
        if word in text_lower:
            return "negative"
    return "neutral"

@app.route("/feedback", methods=["POST"])
def submit_feedback():
    data = request.json
    feedback = data.get("feedback", "")
    rating = data.get("rating")
    category = data.get("category")
    flight_number = data.get("flightNumber")
    email = data.get("email")

    sentiment = analyze_sentiment(feedback)
    if sentiment == "positive":
        table = "positive_feedbacks"
    elif sentiment == "negative":
        table = "negative_feedbacks"
    else:
        return jsonify({"message": "Feedback sentiment unclear. Please be more specific."}), 400

    try:
        with sqlite3.connect("feedback.db") as conn:
            cursor = conn.cursor()
            cursor.execute(f'''
                CREATE TABLE IF NOT EXISTS {table} (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    feedback TEXT,
                    rating INTEGER,
                    category TEXT,
                    flightNumber TEXT,
                    email TEXT
                )
            ''')
            cursor.execute(f'''
                INSERT INTO {table} (feedback, rating, category, flightNumber, email)
                VALUES (?, ?, ?, ?, ?)
            ''', (feedback, rating, category, flight_number, email))
            conn.commit()
        return jsonify({"message": "Feedback submitted successfully!", "sentiment": sentiment})
    except Exception as e:
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500

@app.route("/feedback/positive", methods=["GET"])
def get_positive_feedbacks():
    try:
        with sqlite3.connect("feedback.db") as conn:
            df = pd.read_sql_query("SELECT * FROM positive_feedbacks", conn)
        return jsonify(df.to_dict(orient="records"))
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/feedback/negative", methods=["GET"])
def get_negative_feedbacks():
    try:
        with sqlite3.connect("feedback.db") as conn:
            df = pd.read_sql_query("SELECT * FROM negative_feedbacks", conn)
        return jsonify(df.to_dict(orient="records"))
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
