# Aby Ingress działał musimy zainstalować Ingress controller np:

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml


# Ilość replik:

Dla mongo użyłem tylko 1 repliki, ponieważ tylko 1 może się łączyć w tym samym czasie z wolumenem.
Dla reszty podów użyłem 2 replik, aby w przypadku błędu jednej z nich, była jeszcze dostępna inna. Jeżeli natężenie dla aplikacji się zwiększy to analogicznie można zwiększyć ilość replik.