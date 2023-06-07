import convert from 'xml-js';
const xml = `<?xml version="1.0" encoding="utf-8"?> 
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const convetedJson = JSON.parse(convert.xml2json(xml, {compact: true, spaces: 4}));
const result = {}
result.list = convetedJson.list.student

const newList = result.list.map((student) => {
  const mapedStudent = {}
  mapedStudent.name = `${student.name.first._text} ${student.name.second._text}`
  mapedStudent.age = student.age._text
  mapedStudent.prof = student.prof._text
  mapedStudent.lang = student.name._attributes.lang
  return mapedStudent
})
  console.log ("newList", newList);