---
name: server-management
description: >
  Configures, secures, and maintains Linux servers and VPS environments with production-ready
  best practices. Use when someone says "set up a server," asks about "hardening my VPS," wants
  to "configure SSH," needs to "secure a Linux box," or asks about "server administration tasks."
category: developer
tags: [linux, server, vps, devops, security, sysadmin]
author: community
---

# Server Management

Guides setup, hardening, and maintenance of Linux servers and VPS instances with complete, runnable commands and configuration files.

## Server Management Workflow

### 1. Identify Scope
Determine the exact task category before proceeding:
- **Initial setup**: user creation, hostname, timezone, locale
- **Security hardening**: SSH config, firewall, fail2ban, unattended upgrades
- **Service configuration**: nginx, apache, PostgreSQL, MySQL, systemd units
- **Monitoring/maintenance**: log rotation, cron jobs, disk management, backups

### 2. Initial Server Setup
When setting up a fresh server, always cover in order:
1. Update system packages: `apt update && apt upgrade -y` (Debian/Ubuntu) or `dnf update -y` (RHEL/Fedora)
2. Create non-root sudo user and disable root login
3. Set hostname: `hostnamectl set-hostname <name>`
4. Configure timezone: `timedatectl set-timezone UTC`
5. Enable automatic security updates

### 3. SSH Hardening Rules
Apply every time SSH is mentioned:
- Disable root login: `PermitRootLogin no`
- Disable password auth if keys are set up: `PasswordAuthentication no`
- Change default port (optional but common): `Port 2222`
- Limit login users: `AllowUsers deploy`
- Restart after every change: `systemctl restart sshd`
- Always provide the full `/etc/ssh/sshd_config` block being modified

### 4. Firewall Configuration
Default to `ufw` on Ubuntu/Debian, `firewalld` on RHEL/Fedora:
- Always allow SSH before enabling firewall to prevent lockout
- Provide exact rule sequence: allow SSH → allow services → enable firewall → verify status
- Include `ufw status verbose` or `firewall-cmd --list-all` as verification step

### 5. Security Hardening Checklist
Cover these when asked to harden or secure a server:
- [ ] SSH key authentication enabled
- [ ] Root login disabled
- [ ] Firewall active with minimal open ports
- [ ] fail2ban installed and configured
- [ ] Unattended security upgrades enabled
- [ ] Unused services disabled: `systemctl disable <service>`
- [ ] Swap configured if < 2GB RAM
- [ ] sysctl hardening applied (optional): disable IP forwarding, ICMP redirects

### 6. Service Configuration
When configuring any service:
- Provide complete config file content, not partial snippets
- Include `systemctl enable --now <service>` to persist across reboots
- Add config validation command before restart (e.g., `nginx -t`, `sshd -t`)
- Include rollback instruction if config fails

### 7. Maintenance Tasks
For ongoing maintenance requests:
- **Disk usage**: `df -h`, `du -sh /*`, `ncdu` for interactive
- **Log management**: provide logrotate config blocks when log size is a concern
- **Process monitoring**: `htop`, `ps aux --sort=-%mem`, `systemctl list-units --failed`
- **Backup scripts**: use `rsync` with `--archive --delete`, include cron entry

### 8. Distro Awareness
Always confirm or assume distro before giving commands:
- Ubuntu/Debian: `apt`, `ufw`, `/etc/apt/`
- RHEL/CentOS/Rocky: `dnf`/`yum`, `firewalld`, `selinux`
- If unknown, provide both variants labeled clearly

## Output Format

**For configuration tasks:**
- Brief explanation of what the change does and why (2–3 sentences max)
- Complete shell commands in fenced code blocks with `bash` syntax highlighting
- Full config file sections (not diffs) in fenced blocks with the filename as a