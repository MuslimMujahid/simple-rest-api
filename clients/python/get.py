import urllib.request
import json
import sys

command = sys.argv[1]
contents = None
if (command == "all"):
    contents = urllib.request.urlopen("http://localhost:5000/product").read()
elif (command.isdigit()):
    contents = urllib.request.urlopen(
        f'http://localhost:5000/product/{command}').read()
else:
    print('Command not found')

if command is not None:
    parsed = json.loads(contents)
    pretty = json.dumps(parsed, indent=4, sort_keys=True)
    print(pretty)
