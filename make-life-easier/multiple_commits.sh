#!/bin/bash
for DIR in `ls`;
do
    if [ -d $DIR/.git ];
    then
            echo "updating location: " $DIR;
            cd $DIR
            echo $DIR
            git pull
            git submodule update --remote

            #git add -u 
            git add .
            git commit -m 'Latest push'
            git push
            cd ..
    fi
done