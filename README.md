# DDD

Elementos táticos do DDD

## Entities

Entidade = IDENTIDADE

Entidade anêmica = não possui comportamento, expressividade

Domínio rico, expressa intenções de negócio

Estado atual da entidade deve estar sempre correto (consistência)

A entidade sempre vai representar o estado correto e atual daquele elemento

Dados da entidade devem estar consistentes 100% das vezes para conseguir validar
regras de negócio

### Princípio da autovalidação

Uma Entidade, por padrão, sempre deverá se auto-validar

### Entidade vs ORM

Entidade do DDD (negócio) !== Entidade do ORM (persistência)

Devemos separar a entidade de negócio (complexidade de negócio) da entidade do
ORM (complexidade acidental), elas resolvem problemas diferentes.


## Value Objects

Precisamos parar de trabalhar apenas com tipos primitivos e criar nossos próprios tipos para ganhar expressividade.

Características:

1. Auto-validação
1. Não tem ID
1. Imutável

## Agregados

Conjunto de objetos associados tratado como uma única unidade com o propósito de mudança de dados.

Tipos de relação entre entidades:

fortemente acoplada - utilizamos a própria entidade para relacionar (ex: Entidade B não tem razão para existir sem a Entidade A)

fracamente acoplada - a relação é feita por ID (a Entidade B pode existir sem a necessidade da Entidade A, ainda que relacionadas de alguma maneira)

### Agregados utilizados

- Customer => Address
- Order => OrderItem
- Product


## Domain Service

Operação sem estado que cumpre uma tarefa específica de domínio.
Método que não se encaixa nem numa ENTIDADE nem no OBJETO DE VALOR

## Repositories

Responsável pela persistência de agregados.

O item persistido deve permanecer e ser recuperado no mesmo estado que foi colocado

É possível remover um item do repositório


## Domain Events

- Event - o evento
- Handler - O que será executado quando o evento for disparado
- Dispatcher - Responsável por registrar e executar os handlers de um evento quando esse for disparado.