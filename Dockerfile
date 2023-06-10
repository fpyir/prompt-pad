# Use the official PostgreSQL image as the base image
FROM postgres:13


# Expose the PostgreSQL port
EXPOSE 5432

# Start PostgreSQL when the container launches
CMD ["postgres"]
