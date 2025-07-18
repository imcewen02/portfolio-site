import { Post } from "../post.service";

export const ApacheSupersetSetupPost: Post = {
    id: "apache-superset-setup",
    title: "Getting Started with Apache Superset: What It Is and How to Set It Up",
    date: "06/29/2025",
    cardImage: "superset-logo.png",
    description: `
        Apache Superset is a modern, open-source data exploration and visualization platform that makes it easy to create interactive dashboards and gain insights from your data. 
        In this post, we'll break down what Superset is, who it's for, and how you might be able to use it. 
        You'll also learn how to quickly get a local instance up and running using Docker, making it simple to explore Superset’s features hands-on. 
        Whether you're a developer, analyst, or just curious about BI tools, this guide will help you take the first step with Superset.`,
    content: `
        <div class="fs-2 fw-bold"> What is Apache Superset? </div>
        <div class="fs-5">
            Apache Superset is an open-source business intelligence and data exploration tool. 
            Built on Flask, it offers:
            <ul>
                <li>An integrated SQL editor</li>
                <li>Role-based access control</li>
                <li>Over 30 customizable charts out of the box</li>
                <li>Dashboard creation and publishing</li>
            </ul>
            It’s designed for connecting directly to SQL databases, letting you visualize data with minimal setup. 
            For many BI use cases, the default installation works straight out of the box, with no extra configuration required.
        </div>

        <div class="fs-5 mt-3">
            In the case that you need more than a standard set of BI capabilities, Superset is built for extension. 
            You can customize everything from authentication methods (like OAuth or LDAP) to row-level security with Jinja templates — 
            all through Python config files, without touching Superset’s source code.
        </div>

        <hr>

        <div class="fs-2 fw-bold"> How to Set Up Superset Locally with Docker </div>
        <div class="fs-5">
            Getting Superset running locally is refreshingly simple with Docker. 
            You can pull the official Docker image, set a secret key, and launch a container — that’s it.
            Here's a straightforwards setup based on my implementation experience...

            <div class="fs-5 fw-bold mt-5"> 1: Create a Dockerfile </div>
            Create a dockerfile which will pull the latest official release, and ensure you include whatever database specific drivers you will need.
            You can find all the supported database drivers <a href="https://superset.apache.org/docs/configuration/databases/#supported-databases-and-dependencies">here</a>.
            Your dockerfile should look something like below.
            <div class="card mt-3">
                <div class="card-header font-monospace"> dockerfile </div>
                <div class="card-body font-monospace bg-dark text-light">
                    FROM apache/superset <br>
                    <br>
                    RUN pip install pymssql <- Example driver for SQL Server support
                </div>
            </div>

            <div class="fs-5 fw-bold mt-5"> 2: Build Your Docker Image </div>
            Once you have your dockerfile, you can build a docker image by running the below command in directory of your dockerfile.
            <div class="card mt-3">
                <div class="card-header font-monospace"> bash </div>
                <div class="card-body font-monospace bg-dark text-light">
                    docker build -t superset .
                </div>
            </div>

            <div class="fs-5 fw-bold mt-5"> 3: Set Your Secret Key </div>
            Before you build an instance you must configure a secret key. 
            Superset will not run if it detects the default secret key.
            In order to configure a secret key, create a config folder, and add a new superset_config.py file to it with the following content (substituting your secret key where appropriate).
            <div class="card mt-3">
                <div class="card-header font-monospace"> config/superset_config.py </div>
                <div class="card-body font-monospace bg-dark text-light">
                    SECRET_KEY = "your_secret_key_here"
                </div>
            </div>

            <div class="fs-5 fw-bold mt-5"> 4: Run the Superset Container </div>
            Now that you have everything configured, you are ready to run your Superset container.
            Run the following command, filling in the path to your config folder that you created during step 3.
            <div class="card mt-3">
                <div class="card-header font-monospace"> bash </div>
                <div class="card-body font-monospace bg-dark text-light">
                    docker run -d -p 8088:8088 -v <ABSOLUTE_PATH_TO_CONFIG>:/app/pythonpath/ --name superset superset
                </div>
            </div>

            <div class="fs-5 fw-bold mt-5"> 5: Initialize Superset </div>
            Before you can login to your Superset instance, you will need to initialize the internal database and create an admin user.
            Run the following commands to initialize your Superset instance.
            <div class="card mt-3">
                <div class="card-header font-monospace"> bash </div>
                <div class="card-body font-monospace bg-dark text-light">
                    docker exec -it superset superset db upgrade <br> <br>
                    docker exec -it superset superset init <br> <br>
                    docker exec -it superset superset fab create-admin --username admin --firstname Superset --lastname Admin --email admin@superset.com --password admin
                </div>
            </div>

            <div class="fs-5 fw-bold mt-5"> 6: Log In & Explore </div>
            With this you should now have a local version of Superset running and publishing to port 8088.
            You should be able to open http://localhost:8088 and login with username "admin" and password "admin".
        </div>
    `
}