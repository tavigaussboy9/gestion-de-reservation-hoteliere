# Gestion de Réservation Hôtelière

Ce projet a pour but de créer une application de gestion de réservation hôtelière en utilisant une architecture microservices. Chaque service fonctionnel est séparé, ce qui facilite la maintenance et l'évolution de l'application.

## Architecture du Projet

Le projet est divisé en plusieurs microservices :
- **Service Utilisateur** : Gère l'inscription, la connexion et les profils des utilisateurs.
- **Service Réservation** : Gère la création, l'annulation et la modification des réservations.
- **Service Paiement** : Gère le traitement des paiements et les factures.
- **Service Avis** : Permet aux utilisateurs de laisser des avis sur leur séjour.

## Technologies Utilisées
- Node.js  
- Express  
- MongoDB  
- Docker  
- RabbitMQ pour la communication entre services

## Installation
1. Clonez le dépôt : `git clone https://github.com/votre_nom_utilisateur/gestion-de-reservation-hoteliere`
2. Accédez au dossier du projet : `cd gestion-de-reservation-hoteliere`
3. Suivez les instructions d'installation pour chaque microservice dans leur dossier respectif.

## Utilisation
Une fois tous les services déployés, vous pouvez interagir avec les API via Postman ou une autre application similaire. Les spécifications API sont fournies dans la documentation de chaque service.

## Contribuer
Si vous souhaitez contribuer à ce projet, ouvrez une issue ou soumettez une pull request.

## License
Ce projet est sous la licence MIT.
