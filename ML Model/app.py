import numpy as np
from flask import Flask, request, jsonify
import pickle
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import StandardScaler
import pandas as pd

# /home/KeerthikaReddy/mysite/
model = pickle.load(open('model.pkl', 'rb'))
print('model is loaded')
app = Flask(__name__)

@app.route('/',methods=['GET'])
def index():

    # https://keerthikareddy.pythonanywhere.com/?area=1000&bedroom=2&bathroom=2&stories=2&mainroad=yes&guestroom=no&basement=yes&hotwaterheating=no&airconditioning=yes&parking=1&prefarea=yes&furnishingstatus=furnished
    dataset = pd.read_csv('Housing.csv')
    area = int(request.args['area'])
    bedrooms = int(request.args['bedroom'])
    bathrooms = int(request.args['bathroom'])
    stories = int(request.args['stories'])
    mainroad = (request.args['mainroad'])
    guestroom = (request.args['guestroom'])
    basement = (request.args['basement'])
    hotwaterheating = (request.args['hotwaterheating'])
    airconditioning = (request.args['airconditioning'])
    parking = int(request.args['parking'])
    prefarea = (request.args['prefarea'])
    furnishingstatus = (request.args['furnishingstatus'])    


    X = dataset.iloc[:, 1:].values
    ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [4,5,6,7,8,10,11])], remainder='passthrough')
    X = ct.fit_transform(X)

    scaler = StandardScaler()
    scaler.fit(X)
    X = scaler.transform(X)

    test = [[area, bedrooms, bathrooms, stories, mainroad, guestroom, basement, hotwaterheating, airconditioning, parking, prefarea, furnishingstatus]]
    test=ct.transform(test)
    test=scaler.transform(test)
    pred=model.predict(test)
    pred = str(pred)
    pred = pred[1:-2]
    return jsonify(prediction=str(pred))

if __name__ == "__main__":
    app.run(debug=True)
    