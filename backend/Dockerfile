# Dockerfile

# Use an official Python runtime as a parent image
FROM python:3.10

# Set the working directory in the container
WORKDIR /backend

# Copy the requirements file into the container
COPY requirements.txt /backend/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code
COPY . /backend/

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
