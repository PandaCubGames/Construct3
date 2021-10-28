


const scriptsInEvents = {

		async EventSheet1_Event14_Act6(runtime, localVars)
		{
			var positionX = runtime.globalVars.posX
			var positionY = runtime.globalVars.posY
			console.log(positionX)
			console.log(positionY)
			var url = 
			"http://127.0.0.1:4444/"+positionX+"/"+positionY
			
			var xhr = new XMLHttpRequest();
			xhr.open("POST", url);
			
			//xhr.setRequestHeader("Accept", "application/json");
			//xhr.setRequestHeader("Content-Type", "application/json");
			
			xhr.onreadystatechange = function () {
			   if (xhr.readyState === 4) {
			      //console.log(xhr.status);
			      //console.log(xhr.responseText);
			   }};
			
			var data = {
				"Angle":runtime.globalVars.ShootAngle,
				"Power":runtime.globalVars.ShootPower
			};
			console.log(data);
			xhr.send(data);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

