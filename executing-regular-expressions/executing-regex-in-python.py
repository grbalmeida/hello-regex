import re

text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

nine = re.compile('9')

match = re.search(nine, text)

print "Positions: %s, %s; Value: %s." % (match.start(), match.end(), match.group(0))

values = re.findall('[a-f]', text)

print "Values: %s" %values