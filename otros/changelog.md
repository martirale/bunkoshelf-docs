# Changelog

## v0.8.1 <Badge type="tip" text="Latest" />

- Complete refactoring of the library scanner
- Add new version available tracker
- Add new version available alert

## v0.7.0

- Add currently reading manga hero section
- Add recently readded manga section
- Add incognite reading mode

## v0.6.0-beta

- Add reading progress persist in local for real time reading
- Add reading progress persist in DB for cross-device sync
- Fix no updateable final user DB

## v0.5.0-beta

- Create `Dockerfile` for production
- Create `compose.yml` file for production installation
- Optimize Docker image size
- Fix manga covers path in production
- Optimize component logic of manga library, profile and settings sections
- Downloadable database
- Update translations

## v0.4.0-alpha

- Add toast provider support
- Create metadata extractor (`ComicInfo.xml` into CBZ files)
- Add metadata scan button in settings page
- Rendering metadata from DB into frontend
- Change library components directory
- Upate client-side components APIs
- Add new api for full library scan

## v0.3.0-alpha

- First manga reader version (support CBZ files)
- Adjust complete library layout on mobile devices
- Add new translations
- Fix sort volumes and series by title and numbering
- Fix custom fonts in Tailwind utils classes

## v0.2.0-alpha

- Full manga library structure
- Library path scan and indexing in DB
- Mark as favorite function in series and volumes
- Extract cover images from CBZ files
- Mapping favorites series and volumes in Favorites page
- Refactoring Server Side components (from fetch to Prisma)

## v0.1.0-alpha

- UI/UX inicial
- Sistema de login con JWT + cookies
- Verificación de sesión activa y protección de rutas
- CRUD completo para usuarios
