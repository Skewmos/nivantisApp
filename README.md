[![Minimum REACT Version](https://img.shields.io/badge/React-v17.0.1-brightgreen)](https://reactjs.org/docs/getting-started.html)


# NivantisApp

NivantisApp est une application pharmaceutique, qui permet de faire des calculs de prix et de remise selon une banque de médicaments disponible.
Le projet est développé avec React et type script. Il tourne sous Docker avec un container node14.

## Installation
NivantisApp fonctionne avec docker il vous faudra donc vous munir de [docker](https://www.docker.com/)

Pour Windows : 

Suivre les indications [suivantes](https://docs.docker.com/docker-for-windows/install/)

Pour linux : 

```bash
sudo apt update -y & sudo apt upgrade -y
sudo apt-get install  curl apt-transport-https ca-certificates software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce
```

Pour Mac : 

Suivre les indications [suivantes](https://docs.docker.com/docker-for-mac/install/)

# Déploiement

Pour déployer le projet il vous suffira de lancer la commande suivante : 

```bash
  docker run -p 8100:8100 -it nivantisapp
```

#Technologies

Le projet tourne avec les technologies suivantes : 

  - [ReactJS](https://reactjs.org/)

# Versionnement

 Utilisation la méthodologie [GitFlow](https://danielkummer.github.io/git-flow-cheatsheet/) 
 
# Auteurs

  - Legrand Jérémie => [Skewmos](https://github.com/Skewmos)