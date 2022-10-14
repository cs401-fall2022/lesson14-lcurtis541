
 QUnit.test('Text changes back and forth', function(assert) {
   const titleChangeButton = document.getElementById("changeTitleButton");
   const sectionOneTite = document.getElementById("sectionOneTite"); 

   assert.equal(sectionOneTite.innerHTML,"Starting a TypeScript Project");
   titleChangeButton.click();
   assert.equal(sectionOneTite.innerHTML,"CHANGED THE TITLE");
   titleChangeButton.click();
 });
 
 
 QUnit.test('Text changes back and forth multiple times', function(assert) {
   const titleChangeButton = document.getElementById("changeTitleButton");
   const sectionOneTite = document.getElementById("sectionOneTite"); 

   assert.equal(sectionOneTite.innerHTML,"Starting a TypeScript Project");
   titleChangeButton.click();
   assert.equal(sectionOneTite.innerHTML,"CHANGED THE TITLE");
   titleChangeButton.click();
   assert.equal(sectionOneTite.innerHTML,"Starting a TypeScript Project");
   titleChangeButton.click();
   assert.equal(sectionOneTite.innerHTML,"CHANGED THE TITLE");
 });
 