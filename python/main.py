from flask import Flask, request


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads'

@app.route("/api/upload", methods=["GET"])
def uploadImg():
    files = request.files
    image = files.get('file')
    image.save(os.path.join(app.config['UPLOAD_FOLDER'], image.name))
    return jsonify({
        'success': True,
        'filename': image.name,
        'filepath':
    })

@app.route("/api/process-image", methods=["GET"])
def process():
    
