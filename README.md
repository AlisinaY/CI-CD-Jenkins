Für dein Verständnis: CI/CD arbeiten üblicherweise auf der Basis eines Code-Verwaltungs-Repositories das an einer zentralen Stelle betrieben wird.  Bei uns wäre das normalerweise ein Repo zB in Bitbucket.
 
Wenn du nun ein bisschen Code hast, der durch CI getestet und durch CD deployed werden soll, dann erstell dir einen einfachen Git-Server in einer neuen VM (und darin ein Git-Repo in dem dein Code liegt) und in einer dritten VM installierst du Jenkins.
 
Im nächsten Schritt müsstest du dann einen Job in Jenkins so einrichten, dass es dieses Repository regelmäßig abruft und die Schritte aus der Jenkinsfile die darin liegt durchführt.
