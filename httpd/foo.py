#! /usr/bin/python
import cgi

print 'Content-Type: text/html'
print

store = cgi.FieldStorage()

print '<html><head></head><body><h1>'

if 'foo' in store:
	print store.getvalue('foo')

print '</h1></body></html>'