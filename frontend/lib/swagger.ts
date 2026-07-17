//Swagger 설정 정의하기

import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = () => {
    const spec = createSwaggerSpec({
        apiFolder: "app/api/docs", //Next.js API 라우트 경로
        definition: {
            openapi: "3.1.0",
            info: {
                title: "Next.js Swagger API문서",
                version: "1.0.0",
            },
            "paths": {
                "/users/{id}": {
                    "get": {
                        "summary": "Get user by ID",
                        "parameters": [
                            {
                                "name": "id",
                                "in": "path",
                                "required": true,
                                "type": "integer"
                            }
                        ],
                        "responses": {
                            "200": {
                                "description": "Successfule response",
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "integer"
                                        },
                                        "name": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    });
    return spec;
}
    