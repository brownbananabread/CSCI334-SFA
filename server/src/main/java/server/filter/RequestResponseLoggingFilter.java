package server.filter;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.util.ContentCachingRequestWrapper;
import org.springframework.web.util.ContentCachingResponseWrapper;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.Enumeration;

@Component
public class RequestResponseLoggingFilter implements Filter {

    private static final Logger logger = LoggerFactory.getLogger(RequestResponseLoggingFilter.class);

    // ANSI escape codes
    private static final String RESET  = "\u001B[0m";
    private static final String GREEN  = "\u001B[32m";
    private static final String WHITE  = "\u001B[37m";
    private static final String BLUE   = "\u001B[34m";
    private static final String YELLOW = "\u001B[33m";

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        ContentCachingRequestWrapper wrappedRequest = new ContentCachingRequestWrapper(httpRequest);
        ContentCachingResponseWrapper wrappedResponse = new ContentCachingResponseWrapper(httpResponse);

        long startTime = System.currentTimeMillis();

        try {
            chain.doFilter(wrappedRequest, wrappedResponse);
        } finally {
            long duration = System.currentTimeMillis() - startTime;
            logger.info(RESET);
            logger.info(YELLOW + "EVENT" + RESET);
            logger.info(WHITE + "------------------------------------------------------------------------" + RESET);

            logRequest(wrappedRequest);
            logResponse(wrappedResponse, duration);

            logger.info(WHITE + "------------------------------------------------------------------------" + RESET);

            wrappedResponse.copyBodyToResponse(); // send response to client
        }
    }

    private void logRequest(ContentCachingRequestWrapper request) {
        logger.info(GREEN + "Request" + RESET);

        logLine("- Method        : {}", request.getMethod());
        logLine("- URI           : {}", request.getRequestURI());
        logLine("- Query String  : {}", request.getQueryString());
        logLine("- Remote Addr   : {}", request.getRemoteAddr());

        StringBuilder headers = new StringBuilder();
        Enumeration<String> headerNames = request.getHeaderNames();
        if (headerNames != null) {
            for (String headerName : Collections.list(headerNames)) {
                headers.append(headerName)
                        .append("=")
                        .append(request.getHeader(headerName))
                        .append("; ");
            }
        }
        logLine("- Headers       : {}", headers.toString().trim());

        byte[] requestBody = request.getContentAsByteArray();
        if (requestBody.length > 0) {
            String body = new String(requestBody, StandardCharsets.UTF_8).replaceAll("\\s+", " ");
            logLine("- Body          : {}", body.trim());
        }
    }

    private void logResponse(ContentCachingResponseWrapper response, long duration) {
        logger.info(GREEN + "Response" + RESET);

        logLine("- Status        : {}", response.getStatus());
        logLine("- Content-Type  : {}", response.getContentType());

        byte[] content = response.getContentAsByteArray();
        String body = new String(content, StandardCharsets.UTF_8);
        logLine("- Body          : {}", body);

        logLine("- Duration      : {} ms", duration);
    }

    private void logLine(String message, Object value) {
        logger.info(WHITE + message + RESET, value);
    }
}
