<script setup lang="ts">
</script>

<template>
    <div id="myDiv" class="header">
<h2>My to do list</h2>
<input type="text" id="myInput" placeholder="Titel...">
<span :onclick="'newElement()'" class="addBtn">Add</span>
    </div>

<ul id="myUL">
 <li>Lära mig programmera</li> 
 <li>Kunna resa</li>
 <li>Äta god mat</li>
</ul>
</template>

