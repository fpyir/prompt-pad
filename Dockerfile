# Use the official PostgreSQL image as the base image
FROM postgres:13

# Copy initialization script to run after database creation
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432

# Start PostgreSQL when the container launches
CMD ["postgres"]
