# install
```npx create-react-app <yourappname>```
cd wpreact
 ```npm i axios react-router-dom```
After complete installtion
```npm start```


## Add Bootstrap
```npm install --save bootstrap@latest```




## JWT Authentication for WP REST API

#### 1.0 To enable this option you’ll need to edit your .htaccess file adding the follow

```
RewriteEngine on
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
```

#### 2.0 To add the secret key edit your wp-config.php file and add a new constant called JWT_AUTH_SECRET_KEY
```
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
```
You can use a string from here https://api.wordpress.org/secret-key/1.1/salt/

### 2.1 Configurate CORs Support
To enable the CORs Support edit your wp-config.php file and add a new constant called JWT_AUTH_CORS_ENABLE
```
define('JWT_AUTH_CORS_ENABLE', true);
```


### 3.0 Namespace and Endpoints

When the plugin is activated, a new namespace is added

Endpoint | HTTP Verb
/wp-json/jwt-auth/v1/token | POST
/wp-json/jwt-auth/v1/token/validate | POST
