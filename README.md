# Estudos Kubernetes

## Materias

VIDEO: Intensivo Kubernetes: O mínimo que um dev precisa saber
https://www.youtube.com/watch?v=5unI7VPnASM

Comandos:
https://kubernetes.io/pt-br/docs/reference/kubectl/cheatsheet/

Kubernetes IDE:
https://k8slens.dev/



## Kubernetes no ambiente local

Kind: https://kind.sigs.k8s.io/

### Instalação:
https://kind.sigs.k8s.io/docs/user/quick-start/#installing-from-release-binaries


```sh

# download binário
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.11.1/kind-linux-amd64

# adiciona permissão
chmod +x ./kind

# move para uma pasta configurada no $PATH
sudo mv ./kind /usr/local/bin/

```

### Criar um cluster local

``` sh

kind create cluster --name=hellok8s

```




## Comandos Kubernetes

```sh

# Listar nós
kubectl get nodes


# Listar serviços
kubectl get services


# Listar pods
kubectl get pods


# Aplicar um deployment
kubectl apply -f deployment.yaml


# Exibir logs de uma label
kubectl logs -f -l app=server


# Encaminhamento de porta entre a máquina local e a rede do Cluster Kubernetes
kubectl port-forward service/server 3000:3000


# Desfazer o último deployment
kubectl rollout undo deployment server

```



## Comandos Docker

```sh

docker build -t eliassv/hello-node:2.0 .

docker push eliassv/hello-node:2.0

```
