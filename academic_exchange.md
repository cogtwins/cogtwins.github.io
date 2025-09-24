---
layout: default
title: Academic Exchange
permalink: /academic_exchange/
---
<div class="container mt-3">
<div class="fs-4 fw-semibold border-bottom">
    <i class="bi bi-mortarboard"></i>
    Academic Exchange
</div>

<ol class="list-group-numbered mt-3">
  {% for ex in site.data.exchage_2024 %}
    <li class="list-group-item">
      {% if ex.relative_file %}
        {% if ex.notice %}
          <a class="text-decoration-none" href="{{ '/academic_exchange/' | append: ex.file_url }}"> {{ ex.name }} </a>
        {% else %}
          <a class="text-decoration-none" href="{{ '/assets/exchange_2024/' | append: ex.file_url }}" target="_blank"> {{ ex.name }} </a>
        {% endif %}
      {% else %}
        <!-- Use the external URL directly -->
        <a class="text-decoration-none" href="{{ ex.file_url }}" target="_blank"> {{ ex.name }} </a>
      {% endif %}
      <br>
      <span class="text-muted ms-3">{{ ex.date | date: site.date_format }}</span>
    </li>
  {% endfor %}
</ol>
</div>