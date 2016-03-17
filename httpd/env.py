#! /usr/bin/python
# A Python CGI program which prints out its environment variables,
# and the contents of stdin.

import os
import sys

print 'Content-Type: text/plain'
print
for var in os.environ:
    print '%s = %s' % (var, os.environ[var])
print 'stdin = %s' % sys.stdin.read()