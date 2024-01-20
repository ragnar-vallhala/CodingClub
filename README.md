# CodingClub Website Deployment Guide

Steps to update and deploy the CodingClub website on Hostinger VPS.

## Deployment Steps

1. SSH into Hostinger VPS:

    ```bash
    ssh root@vps_ip
    ```

    Replace `vps_ip` with  VPS IP address.

2. Navigate to the CodingClub directory:

    ```bash
    cd CodingClub
    ```

3. Pull the latest changes from the Git repository:

    ```bash
    git pull
    ```

4. Build the project:

    ```bash
    pnpm build
    ```




