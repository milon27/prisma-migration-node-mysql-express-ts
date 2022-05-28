#!/bin/sh

# -e Exit immediately when a command returns a non-zero status.

# -x Print commands before they are executed

set -ex

# Seeding command

# mysql -u root myblog2 < myblog.sql
 mysql -u milon27 -p1234567 myblog2 < myblog.sql
