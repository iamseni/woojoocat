"use client"; //브라우저 환경에서만 동작 해야 하니까 (csr)

import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

export default function SwaggerPage() {
  return (
    <div>
      <SwaggerUI url="/api-docs" />
    </div>
  );
}
