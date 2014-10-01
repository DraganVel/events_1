<!DOCTYPE html>
<html>
	<head>
		<title>Form Demo</title>
		<meta name ="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="jquery.mobile-1.4.4.min.css" />
		<script src="jquery-1.11.1.min.js"></script>
		<script  src="jquery.mobile-1.4.4.min.js"></script>
		
	</head>
	<body>
		<div data-role="page" >
			<div data-role = "header"  ><h1>Form Result</h1></div>
			<div data-role ="content">
				<cfloop item="field" collection="#form#">
					<cfoutput>
						<p>
							The form field #field# has the value #form[field]#.
						</p>
					</cfoutput>
				</cfloop>
			</div>
			
		</div>

	</body>
</html>