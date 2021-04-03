# Faculdade Impacta - IRPF and IMC Calculation App

This application runs on React.JS on port 3000, depending on two back-end servers:
- IRPF running on port 8080
- IMC running on port 8081


## Running the application
To run the application use docker-compose to get the services running, with the following command on your terminal:

``` shell
$ docker-compose up -d
```

## Accessing the application
Open your browser and access the URL http://localhost:3000/


## Listing the servicers
After running `docker ps` you should get this result:

``` shell
CONTAINER ID   IMAGE                             COMMAND                  CREATED          STATUS          PORTS                              NAMES
fb160c280dd1   caiobastos12/irpf-api:1.0.0       "java -Djava.securit…"   7 minutes ago    Up 7 minutes    0.0.0.0:8080->8080/tcp             repository_irpf_api_1
eba2f8b8c89a   rogeranjo/irpf-imc:latest         "docker-entrypoint.s…"   18 minutes ago   Up 18 minutes   0.0.0.0:3000->3000/tcp             react_app
190676df1c27   caiobastos12/imc-calc-api:1.0.0   "java -Djava.securit…"   21 minutes ago   Up 21 minutes   8081/tcp, 0.0.0.0:8081->8080/tcp   repository_imc_api_1
```