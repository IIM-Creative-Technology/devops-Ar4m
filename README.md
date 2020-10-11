## Devops - Aram TOSBATH

Projet React très simpliste (qui pourra être modifié par la suite) dans le but de travailler sur le déploiement de site.

Les outils de CI/CD utilisés sont GitHub Actions et Heroku, qui permettent l'automatisation du workflow.

URL de la prod : https://devops-ar4m.herokuapp.com/

URL de la preprod : https://devops-ar4m-preprod.herokuapp.com/

Les push effectués sur le github du projet sont directement liés à la plateforme Heroku :
- Les changements de code appliqués à la branche "master" sont déployés sur la prod.
- Les changements de code appliqués à la branche "preprod" sont déployés sur la preprod.

Avant le déploiement du site, GitHub Actions permet de construire, tester, et réviser le code pour s'assurer du bon fonctionnement de celui-ci.
Ces différentes étapes sont visibles dans les fichiers "deploy.yml" et "deploy_preprod.yml" (dans le dossier .github/workflows).