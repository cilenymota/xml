<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version = "1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match = "/textBookList">

	<html>
		<body>
			<h2>My Textbooks List</h2>
	
			<table border = "3">
				<tr bgcolor="lightgreen">
					<th>Title</th>
					<th>Author name</th>
					<th>Author Lastname</th>
					<th>Publisher:</th>
					<th>Website:</th>
					<th>Year:</th>
					<th>ISBN:</th>
					<th>Edition:</th>
					<th>Covertype:</th>
				</tr>
				
				<xsl:for-each select = "book">
				
					<tr>
			<td><xsl:value-of select = "title"/></td>
			<td><xsl:value-of select = "authorName"/></td>
			<td><xsl:value-of select = "authorLastName"/></td>
			<td><xsl:value-of select = "publisher"/></td>
			<td><xsl:value-of select = "website"/></td>
			<td><xsl:value-of select = "year"/></td>
			<td><xsl:value-of select = "isbn"/></td>
			<td><xsl:value-of select = "edition"/></td>
			<td><xsl:value-of select = "covertype"/></td>	
				</tr>
				
				</xsl:for-each>
				
			</table>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>
