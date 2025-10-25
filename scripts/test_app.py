from app import app

c = app.test_client()

r = c.get('/')
print('GET /', r.status_code, len(r.data))

form = {
    'name': 'Anon',
    'to': 'Budi',
    'mood': 'Bahagia',
    'content': 'Halo Budi',
    'uid': 'u_test'
}
r = c.post('/add', data=form, follow_redirects=True)
print('POST /add', r.status_code)

import re
m = re.search(rb'id="post-([a-f0-9]+)"', r.data)
pid = m.group(1).decode() if m else None
print('pid', pid)

r = c.post(f'/like_post/{pid}', headers={'X-UID': 'u_test'})
print('like1', r.json)
r = c.post(f'/like_post/{pid}', headers={'X-UID': 'u_test'})
print('like2', r.json)

r = c.get(f'/post/{pid}')
print('detail', r.status_code)

r = c.post(f'/post/{pid}/comment', data={'comment': 'Hai', 'uid': 'u_test', 'commenter_name': 'Anon'}, follow_redirects=True)
print('comment', r.status_code)

