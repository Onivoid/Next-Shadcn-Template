format:
	pnpx prettier --write .

lint:
	pnpm run lint

check: format lint

pageGen:
	pnpm run pageGen