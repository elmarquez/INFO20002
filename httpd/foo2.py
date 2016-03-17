#! /usr/bin/python
import cgi

print 'Content-Type: text/html'
print

store = cgi.FieldStorage()

print '<html><head></head><body><table border="1">'
print '<tr><th>name</th><th>value</th></tr>'

for var in store:
	value = cgi.escape(store.getvalue(var))
	print '<tr><td>%s</td><td>%s</td></tr>' % (var, value)

print '</table></body></html>'