mon_nom = "Alice"  # Remplacez "Alice" par votre propre nom
nom_utilisateur = input("Quel est ton nom ? ")
if nom_utilisateur.lower() == mon_nom.lower():
    print("Wow ! Nous avons le même nom ! C'est incroyable ! ")
else:
    print(f"Cool ! {nom_utilisateur}, c'est un joli nom, mais moi je suis {mon_nom} ! ")
