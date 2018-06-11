! bin/sh
# Ubuntu 
set -e 

sudo -v

mkdir -p "$HOME"/.tmp

cd "$HOME"/.tmpa

_update_system(){
    cho "# updating ang upgrading..... "
    sudo apt-get -y update
    sudo apt-get -y upgrade
}

_environment(){
    # install curl if not exits
    echo "# installing curl, and build-essential ..... "
    sudoa apt install curl 
    sudo apt-get install -y build-essential
}

_install_nodejs(){
    echo "# installing nodejs..... "
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt-get install -y nodejs
}

_intall_npm(){  
sudo apt-get install npm -y
}

_install_yarn(){
    # ref: https://yarnpkg.com/lang/en/docs/install/#debian-stable  
    echo "# installing yarn..... "
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list -y

    sudo apt-get update -y
    sudo apt-get install yarn -y
}


_install_creat_app_projecr_plugin(){
    sudo npm install -g create-react-app
}

_main(){
    _update_system
    _environment
    _install_nodejs
    _intall_npm
    _install_yarn
    _install_creat_app_projecr_plugin
}

_main