# Kuchnia na obcasach

# Setup

## Necessary dependencies

| Dependency  | Version  |
| ----------  | -------  |
| Node        | 16.14.2  |
| NPM         | 8.5.0    |
| Docker      | 20.10.12 |

## Environment variables

Create `.env` file from template

```
cp template.env .env
```

## Development

### Whole app

Just run the command below

```
npm start
```

If migrations returns error please run it manually

```
npm run migrate:up
```

### Single module

First install dependencies using

```
npm install:all
```

Next start application from root

```
npm run dev:admin|api|blog
```
