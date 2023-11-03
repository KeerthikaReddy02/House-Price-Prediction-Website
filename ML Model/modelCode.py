# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import pickle
import seaborn as sns
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import LinearRegression
from xgboost import XGBRegressor
from catboost import CatBoostRegressor
from sklearn.metrics import r2_score
from sklearn.metrics import mean_absolute_error,mean_squared_error

"""## Importing the dataset and understanding the dataset"""

# Importing the dataset
dataset = pd.read_csv('Housing.csv')

dataset.head()
dataset.info()

#Count of number of rows in each column that has NaN
dataset.isna().sum()

#Tells how many rows in the DataFrame are duplicated and not
dataset.duplicated().sum()

#Returns the column names
dataset.columns

#Dimension of the dataset
dataset.shape

"""## Visualizing the dataset"""

num_col = ['price','area']

cat_col = ['bedrooms','bathrooms','stories','mainroad','guestroom','basement',
           'hotwaterheating','airconditioning','parking','prefarea','furnishingstatus']

#Histogram of Price and Area columns
for i in num_col:
    print(f'Histogram of {i}')
    sns.histplot(data=dataset,x=i,kde=True)
    plt.savefig(f'{i}_hist_plot.png')
    plt.title(f'Histogram of {i}')
    plt.show()

#Bar plot of all the categorical columns
for i in cat_col:
    sns.countplot(data=dataset,x=i)
    plt.savefig(f'{i}_bar_plot.png')
    plt.title(f'Bar plot of {i}')
    plt.show()

"""## PREPROCESSING"""

# Split into X and y where X is the independent variables and y is the dependent variable
X = dataset.iloc[:, 1:].values
y = dataset.iloc[:, 0].values

# One hot encoding the categorical columns
ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [4,5,6,7,8,10,11])], remainder='passthrough')
X = ct.fit_transform(X)

# Feature Scaling the dataset
scaler = StandardScaler()
scaler.fit(X)
X = scaler.transform(X)

# Splitting the dataset into the Training set and Test set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 1/3, random_state = 0)

"""## Training the Regression models on the Training set"""

# Fitting Decision Tree Regression to the dataset
regressorDt = DecisionTreeRegressor()
regressorDt.fit(X, y)
y_predDt = regressorDt.predict(X_test)

# Evaluating Decision Tree Regression model
print("Decision Tree Regression model performance:\n")
print('For training dataset : ')
mae_train = mean_absolute_error(y_test,y_predDt)
print('mae train : ',mae_train)
mse_train = mean_squared_error(y_test,y_predDt)
print('rmse train : ',np.sqrt(mse_train))
print()
print('For testing dataset :')
mae_test = mean_absolute_error(y_test,y_predDt)
print('mae test : ',mae_test)
mse_test = mean_squared_error(y_test,y_predDt)
print('rmse test : ',np.sqrt(mse_test))
print()
print('score : ',regressorDt.score(X_train,y_train))
print('*'*80)

# Fitting Random Forest Regression to the dataset
regressorRf = RandomForestRegressor()
regressorRf.fit(X, y)
ypredRf = regressorRf.predict(X_test)

# Evaluating Random Forest Regression model
print("Random Forest Regression model performance:\n")
print('For training dataset : ')
mae_train = mean_absolute_error(y_test,ypredRf)
print('mae train : ',mae_train)
mse_train = mean_squared_error(y_test,ypredRf)
print('rmse train : ',np.sqrt(mse_train))
print()
print('For testing dataset :')
mae_test = mean_absolute_error(y_test,ypredRf)
print('mae test : ',mae_test)
mse_test = mean_squared_error(y_test,ypredRf)
print('rmse test : ',np.sqrt(mse_test))
print()
print('score : ',regressorRf.score(X_train,y_train))
print('*'*80)

# Fitting Multiple Linear Regression to the dataset
regressorMl = LinearRegression()
regressorMl.fit(X, y)
y_predMl = regressorMl.predict(X_test)

# Evaluating Multiple Linear Regression model
print('Multiple Linear Regression model performance:\n')
print('For training dataset : ')
mae_train = mean_absolute_error(y_test,y_predMl)
print('mae train : ',mae_train)
mse_train = mean_squared_error(y_test,y_predMl)
print('rmse train : ',np.sqrt(mse_train))
print()
print('For testing dataset :')
mae_test = mean_absolute_error(y_test,y_predMl)
print('mae test : ',mae_test)
mse_test = mean_squared_error(y_test,y_predMl)
print('rmse test : ',np.sqrt(mse_test))
print()
print('score : ',regressorMl.score(X_train,y_train))
print('*'*80)

# Fitting xgboost to the dataset
regressorXg = XGBRegressor()
regressorXg.fit(X, y)
y_predXg = regressorXg.predict(X_test)

# Evaluating xgboost model
print("xgboost model performance:\n")
print('For training dataset : ')
mae_train = mean_absolute_error(y_test,y_predXg)
print('mae train : ',mae_train)
mse_train = mean_squared_error(y_test,y_predXg)
print('rmse train : ',np.sqrt(mse_train))
print()
print('For testing dataset :')
mae_test = mean_absolute_error(y_test,y_predXg)
print('mae test : ',mae_test)
mse_test = mean_squared_error(y_test,y_predXg)
print('rmse test : ',np.sqrt(mse_test))
print()
print('score : ',regressorXg.score(X_train,y_train))
print('*'*80)

# Fitting CatBoost to the dataset
regressorCb = CatBoostRegressor()
regressorCb.fit(X, y)
y_predCb = regressorCb.predict(X_test)

# Evaluating CatBoost model
print("CatBoost model performance:\n")
print('For training dataset : ')
mae_train = mean_absolute_error(y_test,y_predCb)
print('mae train : ',mae_train)
mse_train = mean_squared_error(y_test,y_predCb)
print('rmse train : ',np.sqrt(mse_train))
print()
print('For testing dataset :')
mae_test = mean_absolute_error(y_test,y_predCb)
print('mae test : ',mae_test)
mse_test = mean_squared_error(y_test,y_predCb)
print('rmse test : ',np.sqrt(mse_test))
print()
print('score : ',regressorCb.score(X_train,y_train))
print('*'*80)


"""# Choosing Decision Tree Regression as it has the highest accuracy of 99.91"""
fig, ax = plt.subplots()
ax.scatter(y_predDt, y_test, edgecolors=(0, 0, 1))
ax.plot([y_predDt.min(), y_predDt.max()], [y_predDt.min(), y_predDt.max()], 'r--', lw=3)
ax.set_xlabel('Predicted')
ax.set_ylabel('Actual')
plt.savefig('scatter_plot.png')  # Save the plot as a PNG file
plt.show()

# Saving model to disk
pickle.dump(regressorDt, open('model.pkl', 'wb'))