
from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# Replace "your_openai_api_key" with your actual OpenAI API key
openai.api_key = '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'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('home.html')
@app.route('/ask', methods=['POST'])

def ask():
    data = request.json
    message = data['message']
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # Ensure you're using a chat model
            messages=[{"role": "user", "content": message}]
        )
        reply = response.choices[0].message['content'].strip()
    except Exception as e:
        reply = f"An error occurred: {str(e)}"
    
    return jsonify({"reply": reply})

if __name__ == '__main__':
    app.run(debug=True)
