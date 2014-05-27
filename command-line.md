
# Command Line

Here show the all support command list of `Ninja-Template`, you can check help `-h`, `--help` and see the detail.

    $ ninja [command] -h

## Template

**ninja save**

>  Save remote template to local.


**ninja commit**

>  Commit comment to DB of template.

**ninja deftag**

>  Query text or name of deftag. 


## Admin

**ninja login**

>  Alias is `lo`,  login with default browser.

**ninja lookup**

>  Lookup handle or register e-mail.

## Debug
**ninja debug**

> Alias is `de`, Mapping local files to remote:


> `1` client request -> `2` **debug proxy** -> `3` server

> `4` server reponse -> `5` **debug proxy** -> `6` client