---
layout: post
title: "Markdown test"
date: 2024-10-30
tags: update team
---

### My Title

<div class="text-center">
    <h3>
        Jiehan Zhou
    </h3>
</div>

<div class="img-fluid text-center">
    <img src="{{ '/assets/imgs/jiehan.jpg' | relative_url }}" alt="Alt text" class="img-fluid border rounded">
</div>

### Listed Items

1. Item 1
2. Item 2
3. Item 3

### Unlisted Items

- Item 1
- Item 2
- Item 3

### Features
<i class="bi bi-check-circle"></i> Feature 1

<i class="bi bi-check-circle"></i> Feature 2

<div class="row">
  <div class="col-md-6">
  ### Left Column Content here.
</div>
  <div class="col-md-6">
  ### Right Column Content here.
  </div>
</div>

<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </tbody>
  </table>
</div>


<div class="alert alert-info" role="alert">
  <strong>Note:</strong> This is an important message.
</div>

```python
def hello():
    print("Hello")
```

```html
<div class="code-example">
    <code>
    console.log("Hello, world!");
    let id = document.getElementById('id');
    </code>
</div>
```