package letscode.sarafan.repo;

import letscode.sarafan.damain.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<Message, Long> {
}
