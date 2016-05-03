import kha.FastFloat;
import kha.Assets;

class GameScene extends Scene {
    private var player: Sprite;
    
    public function new() {
        super();
        player = new Sprite(Assets.images.asteroid_1024x768);
    }
    
    public override function update(dt: FastFloat) {
        player.move(5*dt, 5*dt);
    }
}