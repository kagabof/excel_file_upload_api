# excel_file_upload_api

REST API-based backend system for uploading large excel file

### Installing

```
    $ git clone https://github.com/kagabof/excel_file_upload_api.git
    $ cd excel_file_upload_api
    $ npm install
    $ git checkout develop
```

- Create .env and copy paste the environment variable from `.env_example` file that's already existent in the root directory

### Running the application

Run the command below to run the application locally.

```
  $ npm run dev

```

### Endpoints implemented

| VERBS | ENDPOINTS                                   | STATUS | DESCRIPTION                                             |
| ----- | ------------------------------------------- | ------ | ------------------------------------------------------- |
| POST  | /auth/signup                                | 201 OK | Sign up accounts                                        |
| GET   | /auth/signin                                | 200 OK | Sign in                                                 |
| POST  | /upload                                     | 201 OK | Upload excel file                                       |
| GET   | /files/data/:file_id                        | 200 OK | Get data by file id                                     |
| GET   | /files                                      | 200 OK | Get All files                                           |
| GET   | /data                                       | 200 OK | Get all records with query filters                      |
| PATCH | /record/:recordId                           | 201 OK | Update records by record id                             |
| PATCH | /commit/:file_id                            | 201 OK | Commit by file Id                                       |

### Stories (Tasks implemented)

GitHup projects: [click here](https://github.com/kagabof/excel_file_upload_api/projects/1)
