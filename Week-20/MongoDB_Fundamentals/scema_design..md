**Collections:**

1. **Movies**

   - Title (string)
   - Release Year (int)
   - Genre (string)
   - Director ID (reference to Directors)
   - Actor IDs (references to Actors)

2. **Directors**

   - Name (string)
   - Nationality (string)
   - Movie IDs (references to Movies directed)

3. **Actors**
   - Name (string)
   - Nationality (string)
   - Movie IDs (references to Movies acted in)

**Relationships:**

- Each movie has a director and a list of actors.
- Each director has directed one or more movies.
- Each actor has acted in one or more movies.

This plain design outlines the essential components of your movie database, emphasizing the relationships between movies, directors, and actors.
