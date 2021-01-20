# Steps for creating image


// Bind mount a container to the directory we want to work
`docker container run -d -p 8080:80 -v ${PWD}:/usr/share/nginx/html --name manu-nginx-site nginx`

`docker image build -t manucho007/ngnix-site-manuel . `

`docker container run -p 8082:80 manucho007/ngnix-site-manuel`

`docker push manucho007/ngnix-site-manuel`