/*

Instalación de Node y NPM
Antes de instalar Node.js y npm en su máquina, primero debe verificar si ya está instalado.  

Verificación de la instalación existente en Windows
En Windows, puede usar la  tecla de método abreviado WINKEY+r  , que abre la ventana Ejecutar. 
Dentro de la  entrada Abrir:  de la ventana Ejecutar, escriba  cmd  y presione la tecla Intro. 
Esto abrirá el símbolo del sistema.

Dentro del símbolo del sistema, escriba:

nodo --versión

Si hay Node.js instalado en su sistema operativo Windows, devolverá un valor similar a este:

v16.14.2  

Luego puede confirmar que también tiene npm, ejecutando esto:

npm --versión  

Si npm está instalado, obtendrá un resultado similar a este:

8.5.0

Verificación de la instalación existente de Node.js y npm en Ubuntu (Linux)
Puede abrir rápidamente una nueva ventana bash (terminal) en Ubuntu presionando la  tecla de método abreviado CTRL+ALT+t  


En la ventana de bash que se abre, escriba:

nodo --versión && npm --versión

Ambos números de versión deberían aparecer en la ventana bash.  


Instalación de Node.js y npm
En el sistema operativo Windows
En caso de que Node.js y npm no estén instalados en su sistema operativo Windows, vaya a 
https://nodejs.org
.

Ubique el botón de descarga grande, que enumera la versión LTS. A partir de mayo de 2022, la versión LTS disponible 
para descargar es la 16.15.0.


En Mac OS - XCode
Para instalar brew, primero debe instalar Xcode. Homebrew no viene con su propio compilador y necesita Xcode instalado 
para que funcione correctamente. Para instalar Xcode haga lo siguiente:

Abre una terminal.

Ejecute lo siguiente: 

shell xcode-seleccionar --instalar

Aparecerá una ventana emergente pidiéndole que confirme la instalación. Haga clic en el botón Instalar.

Acepte el acuerdo de licencia.

elaborar cerveza
Las Mac no vienen con administradores de paquetes como la mayoría de las distribuciones de Linux. 
Para compensar esto, se creó una herramienta externa llamada brew. Para instalar brew, vaya al sitio web oficial (   
https://brew.sh/
   ) y copie el comando proporcionado, abra una terminal y ejecute el comando:

1
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
Una vez que Brew esté instalado, puede ejecutar el siguiente comando en la terminal

nodo de instalación de cerveza  

Homebrew descargará e instalará las dependencias, una vez que esto esté completo, confirme la instalación escribiendo

nodo -v

Esto mostrará la versión de Node.js

Tipo :

 npm-v

para mostrar el número de versión de NPM.

en Ubuntu
Use la  tecla de atajo CTRL+ALT+t  para abrir una nueva ventana bash, luego ejecute los siguientes comandos:

sudo apt actualizar

sudo apt instalar nodejs  


Eso es todo, deberías estar listo.

Para una configuración más avanzada y solución de problemas, consulte la lectura adicional.



*/
